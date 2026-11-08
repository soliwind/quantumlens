"""Textbook facts the app teaches must come out of the calculation."""

import numpy as np
import pytest

from quantumlens.analysis.describe import describe
from quantumlens.analysis.orbitals import ao_populations
from quantumlens.chem import library
from quantumlens.chem.molecule import from_smiles
from quantumlens.pipeline import analyze


def run(key):
    return analyze(library.load(key))


@pytest.mark.parametrize("key,order,unpaired", [
    ("h2", 1, 0), ("he2", 0, 0), ("li2", 1, 0), ("b2", 1, 2), ("c2", 2, 0),
    ("n2", 3, 0), ("o2", 2, 2), ("f2", 1, 0),
])
def test_homonuclear_diatomics(key, order, unpaired):
    a = run(key)
    assert a.bond_order == order
    assert a.eht.unpaired_electrons == unpaired


def test_n2_sigma_above_pi_but_o2_reversed_order_labels():
    n2 = run("n2")
    assert n2.characters[n2.eht.homo].main == "σ"          # σ2p above π2p (s–p mixing)
    o2 = run("o2")
    somo = [k for k in range(o2.eht.n_mo) if o2.eht.occupations[k] == 1]
    assert len(somo) == 2 and all(o2.characters[k].main == "π*" for k in somo)


def test_benzene_pi_pattern():
    a = run("benzene")
    pis = [k for k, ch in enumerate(a.characters) if ch.symmetry == "π"]
    assert len(pis) == 6
    groups = []
    for k in pis:
        g = next(g for g in a.eht.degenerate_groups if k in g)
        if g not in groups:
            groups.append(g)
    assert [len(g) for g in groups] == [1, 2, 2, 1]


def test_lone_pair_homos():
    for key in ("h2o", "nh3", "h2co"):
        a = run(key)
        assert a.characters[a.eht.homo].bonding == "nonbonding", key


def test_bh3_lumo_is_empty_boron_p():
    a = run("bh3")
    q = ao_populations(a.eht, a.eht.lumo)
    boron_pz = [i for i, ao in enumerate(a.eht.basis) if ao.symbol == "B" and ao.m == "z"]
    assert q[boron_pz].sum() > 0.95


def test_mulliken_sums_to_one_and_phase_is_deterministic():
    a1, a2 = run("pyridine"), analyze(from_smiles("c1ccncc1"))
    for k in range(a1.eht.n_mo):
        assert abs(ao_populations(a1.eht, k).sum() - 1) < 1e-9
    np.testing.assert_allclose(a1.eht.coefficients, a2.eht.coefficients, atol=1e-8)


def test_linear_pi_pairs_aligned_with_axes():
    a = run("acetylene")
    k = a.eht.homo
    group = next(g for g in a.eht.degenerate_groups if k in g)
    first = ao_populations(a.eht, group[0])
    x_weight = sum(first[i] for i, ao in enumerate(a.eht.basis) if ao.m == "x")
    assert x_weight > 0.99


def test_every_library_entry_runs_and_describes():
    for key in library.ENTRIES:
        a = run(key)
        assert a.eht.n_mo > 0
        for k in (a.eht.homo, a.eht.lumo):
            if k is not None:
                assert describe(a, k)


def test_charge_changes_electron_count():
    from dataclasses import replace

    o2 = library.load("o2")
    cation = analyze(replace(o2, charge=1))
    assert cation.eht.n_electrons == 11 and cation.bond_order == 2.5

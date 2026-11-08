"""Our EHT implementation must reproduce RDKit/YAeHMOP on identical geometries."""

import numpy as np
import pytest
from rdkit import Chem
from rdkit.Chem import AllChem, rdEHTTools

from quantumlens.eht.solver import run_eht

SMILES = ["[H][H]", "C=O", "CC#N", "c1ccccc1", "c1ccncc1", "[Li][Li]", "B", "[SiH4]", "P", "S",
          "Cl", "Br", "I", "[Na]Cl", "FC(F)F", "OCC(=O)O", "C=CC=C"]


def _symmetric(m):
    m = np.triu(np.asarray(m))
    return m + np.triu(m, 1).T


@pytest.mark.parametrize("smiles", SMILES)
def test_matches_rdkit(smiles):
    mol = Chem.AddHs(Chem.MolFromSmiles(smiles))
    assert AllChem.EmbedMolecule(mol, randomSeed=7) == 0
    ok, ref = rdEHTTools.RunMol(mol, -1, True)
    assert ok
    res = run_eht([a.GetSymbol() for a in mol.GetAtoms()], mol.GetConformer().GetPositions(), Chem.GetFormalCharge(mol))
    assert res.n_electrons == ref.numElectrons
    # RDKit/YAeHMOP uses a slightly different Å→bohr constant; differences are ~3e-5.
    np.testing.assert_allclose(res.overlap, _symmetric(ref.GetOverlapMatrix()), atol=1e-4)
    np.testing.assert_allclose(res.hamiltonian, _symmetric(ref.GetHamiltonian()), atol=5e-3)
    np.testing.assert_allclose(res.energies, np.sort(ref.GetOrbitalEnergies()), atol=0.05)

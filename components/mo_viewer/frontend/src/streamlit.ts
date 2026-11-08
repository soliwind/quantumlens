// Minimal implementation of the Streamlit custom-component (v1) iframe protocol.
// Avoids the streamlit-component-lib dependency (and its Apache Arrow bundle).

export type RenderData = {
  args: Record<string, unknown>;
  disabled: boolean;
  theme?: Record<string, unknown>;
};

type Listener = (data: RenderData) => void;

const API_VERSION = 1;
const listeners = new Set<Listener>();

function send(type: string, payload: Record<string, unknown> = {}): void {
  window.parent.postMessage({ isStreamlitMessage: true, apiVersion: API_VERSION, type, ...payload }, "*");
}

window.addEventListener("message", (event: MessageEvent) => {
  const data = event.data;
  if (!data || data.type !== "streamlit:render") return;
  const render: RenderData = { args: data.args ?? {}, disabled: Boolean(data.disabled), theme: data.theme };
  listeners.forEach((fn) => fn(render));
});

export const Streamlit = {
  ready(): void {
    send("streamlit:componentReady");
  },
  onRender(fn: Listener): () => void {
    listeners.add(fn);
    return () => listeners.delete(fn);
  },
  setFrameHeight(height: number): void {
    send("streamlit:setFrameHeight", { height });
  },
  setComponentValue(value: unknown): void {
    send("streamlit:setComponentValue", { value, dataType: "json" });
  },
};

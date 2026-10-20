import "server-only";

export type Web3FormsConfig = {
  /** Server-only access key. Never send this to the client. */
  accessKey: string | undefined;
  /** True when the key is present and the form can actually deliver. */
  configured: boolean;
};

function read(value: string | undefined): string | undefined {
  const trimmed = value?.trim();
  return trimmed && trimmed.length > 0 ? trimmed : undefined;
}

export const web3forms: Web3FormsConfig = (() => {
  const accessKey = read(process.env.WEB3FORMS_ACCESS_KEY);
  return { accessKey, configured: Boolean(accessKey) };
})();

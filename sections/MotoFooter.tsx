export interface Props {
  /**
   * @description Newsletter Icon Image URL
   */
  NLIconUrl: string;
  /**
   * @description Privacy checkbox text
   */
  NLButtonSend: string;
  /**
   * @description Newsletter Informative Text
   */
  NLCopy: string;
  /**
   * @description Newsletter Name Placeholder
   */
  NLNamePlaceholder: string;
  /**
   * @description Newsletter Email Placeholder
   */
  NLEmailPlaceholder: string;
}

const defaultValues = {
  NLIconUrl:
    "https://motorola.vteximg.com.br/arquivos/ids/163890-100-100/Newsletter.png?v=637610000000000000",
  NLButtonSend: "Enviar",
  NLNamePlaceholder: "Qual seu nome?",
  NLEmailPlaceholder: "Qual seu e-mail?",
  NLCopy:
    "*A campanha de R$ 150 na primeira compra é válida entre 01/01/2023 a 31/12/2023 até 23h59. O cupom será enviado por email após o cadastro. Limitado somente para 1 (uma) compra por CPF. Válido somente para a primeira compra de smartphone na Loja Online Motorola. O cupom precisa ser inserido no momento do carrinho para o desconto ser efetivado e terá validade de 7 dias corridos após o recebimento do email.",
};
function MotoFooter(
  { NLIconUrl, NLButtonSend, NLNamePlaceholder, NLEmailPlaceholder, NLCopy }:
    Props,
) {
  return (
    <div class="bg-[#001428]">
      <div class="rounded-t-lg bg-gradient-to-t from-[#001428] to-[#11365b] ">
        <div class={"px-4 py-10 md:flex md:flex-row md:gap-8 "}>
          <div class="md:self-center">
            <img
              class="max-w-[115px]"
              loading="lazy"
              src={NLIconUrl || defaultValues.NLIconUrl}
            />
          </div>
          <div>
            <p class="md:text-left md:mb-8 text-center text-white text-lg leading-4 md:text-2xl pb-12 md:pb-0">
              Cadastre-se agora e{" "}
              <span class="text-[#ff554d]">GANHE R$ 150*</span>{" "}
              em sua primeira compra.
            </p>
            <form class="md:flex md:flex-row md:flex-wrap md:gap-6">
              <div class="md:order-1 md:mb-0 md:flex-grow flex flex-col gap-3 md:gap-6 mb-3 md:flex-row md:justify-center">
                <input
                  class="md:w-full md:max-w-96 rounded-lg px-6 h-12 text-black placeholder-black"
                  type="text"
                  placeholder={NLNamePlaceholder ||
                    defaultValues.NLNamePlaceholder}
                />
                <input
                  class="md:w-full md:max-w-96 rounded-lg px-6 h-12 text-black placeholder-black"
                  type="text"
                  placeholder={NLEmailPlaceholder ||
                    defaultValues.NLEmailPlaceholder}
                />
              </div>
              <label class="flex flex-row items-start gap-1 md:order-3">
                <input type="checkbox" />
                <span class="text-white leading-2 text-xs">
                  Aceito receber informações sobre produtos e ofertas
                  promocionais especiais da Motorola por email, e confirmo que
                  tenho 16 anos ou mais. {""}
                  <a
                    class="underline"
                    href="https://help.motorola.com/hc/apps/privacy/web/pt-br/"
                  >
                    Política de Privacidade.
                  </a>
                </span>
              </label>
              <div class="w-full md:w-auto flex align-center justify-center md:order-2">
                <button
                  class="my-10 h-12 md:my-0 w-60 md:w-40 bg-[#ff554d] rounded-lg text-white"
                  type="submit"
                >
                  {NLButtonSend || defaultValues.NLButtonSend}
                </button>
              </div>
            </form>
            <div class="md:my-12">
              <p class="text-white text-opacity-60 text-xs">
                {NLCopy || defaultValues.NLCopy}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MotoFooter;

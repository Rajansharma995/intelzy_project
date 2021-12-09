export const getProvier =  () => {
    if ("solana" in window) {
        const provider = window.solana;
        if (provider.isPhantom) {
          window.solana.connect();
          return (window.solana.publicKey.toString())
        }
      }else{
      window.open("https://phantom.app/", "_blank");
      }
}   
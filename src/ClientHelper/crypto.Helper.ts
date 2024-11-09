// cryptoHelper.ts
import forge from 'node-forge';
class CryptoHelper {
  private key: string;
  private iv: string;

  constructor() {
    this.key = 'b99de936e6947622950bf1dfdb7b01b13ceb0716b5407482fc88cb82e8464bee';  // Default key
    this.iv = '85f713ba66030566db6879b34a7106d7';  // Default IV
  }

  public encryptText(text: string): string {
    try {
      const cipher = forge.cipher.createCipher('AES-CBC', forge.util.hexToBytes(this.key));
      cipher.start({ iv: forge.util.hexToBytes(this.iv) });
      cipher.update(forge.util.createBuffer(text, 'utf8'));
      cipher.finish();

      return cipher.output.toHex();  // Return encrypted text as hex
    } catch (error) {
      console.error("Encryption error:", error);
      throw new Error("Encryption failed");
    }
  }

  public decryptText(encryptedHex: string): string {
    try {
      const decipher = forge.cipher.createDecipher('AES-CBC', forge.util.hexToBytes(this.key));
      decipher.start({ iv: forge.util.hexToBytes(this.iv) });
      decipher.update(forge.util.createBuffer(forge.util.hexToBytes(encryptedHex)));
      decipher.finish();

      return decipher.output.toString();  // Return decrypted text
    } catch (error) {
      console.error("Decryption error:", error);
      throw new Error("Decryption failed");
    }
  }
}

export default new CryptoHelper();

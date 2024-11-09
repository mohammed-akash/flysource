import axiosService from "../services/AxiosService";
import { v4 as uuidv4 } from 'uuid';
class CommonHelper {
  environment: string;
  version: string;

  constructor() {
    this.environment = process.env.PROJECT_ENV ?? 'dev';
    this.version = process.env.API_VERSION ?? 'v1';
  }

  get loginEndpoint(): string {
    return `/api/users/login`;
  }
  get verifyOtpEndpoint(): string {
    return `/user/${this.version}/verify-otp`;
  }
  get signupEndpoint(): string {
    return `/api/users/register`;
  }
  get logooutEndpoint(): string {
    return `/user/${this.version}/logout`;
  }
  get profileEndpoint(): string {
    return `/api/users/profile`;
  }
  get publicProfileEndpoint(): string {
    return `/api/users/social-profile`;
  }
  get forgotPasswordEndpoint(): string {
    return `/user/${this.version}/forgot-password`;
  }
  get resetPasswordEndpoint(): string {
    return `/user/${this.version}/reset-password`;
  }
  get presignedurl(): string {
    return `/api/aws/pre-signed-url`;
  }
  get productDetails(): string {
    return `/product/${this.version}`;
  }
  get publicProfile(): string {
    return `/api/users/scan`;
  }

  attachmentFileImages: Record<number, string> = {
    0: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1200px-PDF_file_icon.svg.png',
    1: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Microsoft_Excel_Logo_%282013-2019%29.svg/2048px-Microsoft_Excel_Logo_%282013-2019%29.svg.png',
    2: 'https://play-lh.googleusercontent.com/emmbClh_hm0WpWZqJ0X59B8Pz1mKoB9HVLkYMktxhGE6_-30SdGoa-BmYW73RJ8MGZQ',
  }
  generateFingerprint = async () => {
    // const fpPromise = FingerprintJS.load();
    // const fp = await fpPromise;
    // console.log(fp)
    // const { visitorId } = await fp.get();
    let id = uuidv4();
    console.log(id)
    return id;
  };
  formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: any = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };
  // uploadFile = async (file: any, uploadType: any) => {
  //   try {
  //     const filename = `${Date.now() + '-' + Date.now()}-${file.name.split(' ').join('-')}`;
  //     // const arrayBuffer: any = await new Promise((resolve, reject) => {
  //     //   const reader = new FileReader();
  //     //   reader.onload = () => resolve(reader.result);
  //     //   reader.onerror = reject;
  //     //   reader.readAsArrayBuffer(file);
  //     // });


  //     const { data }: any = await axiosService.makeRequest('POST', this?.presignedurl, {
  //       name: filename,
  //       type: uploadType
  //     }, {});

  //     let files = file[0];
  //     const FileName = files.name;
  //     const req = {
  //       type: "put",
  //       myFiles: [FileName.toLowerCase().replace(/\s/g, "-")],
  //     };

  //     if (!data.success) throw new Error('Failed to get presigned URL');
  //     const presignedData = data.data.url ?? data.data[0].url;
  //     const uploadResponse = await fetch(presignedData, {
  //       method: 'PUT',
  //       body: files,
  //       headers: { "Content-Type": file.type }
  //     });
  //     if (!uploadResponse.ok) throw new Error('Failed to upload file');
  //     return { filename: filename, success: true, message: 'Upload file successfully' };
  //   } catch (error: any) {
  //     return { success: false, message: error.message };
  //   }
  // };

  uploadFile = async (file: File, uploadType: string, token: string) => {
    try {
      const filename = `${file.name.split(' ').join('-')}`;
      const { data }: any = await axiosService.makeRequest(
        'POST',
        this?.presignedurl,
        {
          name: filename,
          type: uploadType
        },
        {},
        token
      );

      if (!data.success) throw new Error('Failed to get presigned URL');
      const presignedData = data.data.url ?? data.data[0].url;
      const key = data.data.key;
      const uploadResponse = await fetch(presignedData, {
        method: 'PUT',
        body: file,
        headers: { "Content-Type": file.type }
      });
      if (!uploadResponse.ok) throw new Error('Failed to upload file');
      return { filename: key, success: true, message: 'File uploaded successfully' };
    } catch (error: any) {
      return { success: false, message: error.message };
    }
  };

}

export default new CommonHelper();

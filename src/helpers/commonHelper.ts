import nodemailer from 'nodemailer'
import bcrypt from 'bcrypt'
import Jwt from "jsonwebtoken";
class commonHelper {
    sendMail = async (recipient: any, subject: string, body: string) => {
        let MAIL_SERVICE_USER = process.env.MAIL_SERVICE_USER;
        let MAIL_SERVICE_PASSWORD = process.env.MAIL_SERVICE_PASSWORD;
        let MAIL_SERVICE_ACCOUNT = process.env.MAIL_SERVICE_ACCOUNT;
        let MAIL_SERVICE_HOST = process.env.MAIL_SERVICE_HOST;
        let MAIL_SERVICE_PORT = process.env.MAIL_SERVICE_PORT;
        const transporter = nodemailer.createTransport({
            port: MAIL_SERVICE_PORT,
            host: MAIL_SERVICE_HOST,
            secure: true,
            auth: {
                user: MAIL_SERVICE_USER,
                pass: MAIL_SERVICE_PASSWORD,
            },
        });
        const mailOptions = {
            from: MAIL_SERVICE_ACCOUNT,
            to: recipient,
            subject: subject,
            html: body,
        };
        try {
            let data = await transporter.sendMail(mailOptions);
            return { ...data }
        } catch (error) {
            console.log(error)
            throw error
        }
    }


    // Update the function with TypeScript annotations
    generateOTP = (): string => {
        // Use Number() to ensure digits is a number
        let digits: number = Number(process.env.OTP_SIZE) || 8;

        if (digits <= 0 || digits > 8) {
            throw new Error('Invalid number of digits.');
        }
        const min: number = Math.pow(10, digits - 1);
        const max: number = Math.pow(10, digits) - 1;
        // Use Number() to ensure randomCode is a number
        const randomCode: number = Math.floor(Math.random() * (max - min + 1)) + min;
        return randomCode.toString();
    };

    generateToken = async (userID: string) => {
        let expiresDays: number = Number(process.env.JWT_EXPIRE) || 7;
        let JWT_SECRET = process.env.JWT_SECRET
        const expiresIn = Math.floor(Date.now() / 1000) + 60 * 60 * 24 * expiresDays;
        let token = Jwt.sign({ userID }, JWT_SECRET, { expiresIn })
        return { data: token }
    };
    hashPassword = async (password: any) => {
        try {
            const saltRounds: number = Number(process.env.SALT_ROUNDS) || 10;
            const salt = await bcrypt.genSalt(saltRounds);
            const hashedPassword = await bcrypt.hash(password, salt);
            return { password: hashedPassword };
        } catch (error) {
            throw new Error('Error in hashing')
        }
    }
    comparePassword = async (enteredPassword: any, hashedPassword: any) => {
        return new Promise((resolve, reject) => {
            bcrypt.compare(enteredPassword, hashedPassword, (err: any, match: any) => {
                if (err) {
                    console.log("Err=>",err);
                    reject(err);
                } else if (!match) {
                    reject('Invalid password');
                } else {
                    resolve({ match });
                }
            });
        });
    };

    JwtParser = async (token: string) => {
        const JWT_SECRET = process.env.JWT_SECRET;
        return new Promise((resolve, reject) => {
            Jwt.verify(token, JWT_SECRET, (err: any, decoded: any) => {
                if (err) {
                    reject(err);
                } else {
                    resolve({ ...decoded });
                }
            });
        });
    };
}

export default new commonHelper()
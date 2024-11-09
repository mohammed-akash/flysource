import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import commonHelper from '@/ServerHelpers/commonHelper'
import { NextRequest, NextResponse } from "next/server";
import template from "@/DocumentTemplate/template";
connect()
export async function POST(request: NextRequest) {
    try {
        let token = request.cookies.get('token');
        const reqBody = await request.json();
        let {
            lastname,
            firstname,
            email,
            phone,
            amount,
            message,
            employementType,
            salaryMode,
            company,
            creditAmount,
            dob,
            panNumber,
            city,
            service,
            pincode } = reqBody;
        if (!service || (service === "Personal Loan" && !amount)) {
            throw new Error(('Missing Required Parameters'));
        }
        if (token?.value) {
            let data: any = await commonHelper.JwtParser(token?.value);
            const user = await User.findOne({ _id: data.userID });
            email = user.email;
            firstname = user.firstname;
            lastname = user.lastname;
            phone = user.phone
        }
        if (!firstname || !lastname || !email || !phone) {
            throw new Error(('Missing Required Parameters'))
        }
        let mailStatus: number = 500;
        await commonHelper.sendMail(["imohammedakash@gmail.com", "mdakash2003evergreen@gmail.com", "shashi892.kant@gmail.com", "archanak630@gmail.com"], `${firstname} ${lastname} looking for ${service} related query`, template.CLIENT_QUERY_MAIL_BODY({ fullname: `${firstname} ${lastname}`, email, phone, amount, message, employementType, salaryMode, company, creditAmount, dob, panNumber, city, service, pincode })).then((res: any) => { mailStatus = 200 }).catch((err) => { mailStatus = 500 });
        if (mailStatus === 500) {
            throw new Error('Failed to send Otp');
        }
        return NextResponse.json({
            message: 'Applied Successfully',
            status: 200,
        })
    } catch (err: any) {
        return NextResponse.json({
            message: err.message,
            status: 500
        })
    }

}
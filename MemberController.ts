// FB註冊擴充
import { Register } from './service/Member/Auth/Register/Facebook';

export class MemberController {
	public myRegister: Register;

    constructor(Register: Register) {
        this.myRegister = Register;
    }
}
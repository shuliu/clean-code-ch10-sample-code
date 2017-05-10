import Rx from '../node_modules/rxjs/Rx';

interface MemberInterface {

    /** logout */
    logout();

    /** login */
    login(user: string, password: string);
    /** login with facebook */
    loginWithFacebook();
    /** login with twitter */
    loginWithTwitter();

    /** register */
    register();
    /** register with facebook */
    registerWithFacebook();
    /** register with twitter */
    registerWithTwitter();

    /** forget password: email, user name */
    forgetpassword(validateMessage: string);
    /** change password */
    changePassword(oldPassword: string, newPassword: string, newPasswordConfirmation: string);

    /** get member status */
    getStatus();
    /** get member info object */
    getInfo();
    /** update member info */
    setInfo(Info: object);

    /** get bonus total */
    getBonus();
    /** get bonus list */
    getBonusList();
    /** get bonus once info */
    getBonusInfo(bonusId: string);

    /** get cart */
    getCart();
    /** get product info */
    getProductInfo(productId: string);

}



class Member implements MemberInterface {

    private User: object;
    
    constructor() {};
    
    /** logout */
    logout() {};

    /** login */
    login(user: string, password: string) {};
    /** login with facebook */
    loginWithFacebook() {};
    /** login with twitter */
    loginWithTwitter() {};

    /** register */
    register() {};
    /** register with facebook */
    registerWithFacebook() {};
    /** register with twitter */
    registerWithTwitter() {};

    /** forget password: email, user name */
    forgetpassword(validateMessage: string) {};
    /** change password */
    changePassword(oldPassword: string, newPassword: string, newPasswordConfirmation: string) {};

    /** get member status */
    getStatus() {};
    /** get member info object */
    getInfo() {};
    /** update member info */
    setInfo(Info: object) {};

    /** get bonus total */
    getBonus() {};
    /** get bonus list */
    getBonusList() {};
    /** get bonus once info */
    getBonusInfo(bonusId: string) {};

    /** get cart */
    getCart() {};

    /** get product info */
    getProductInfo(productId: string) {};

    /**
     * validations mathod
     */
    private passwordValidation() {};
    private userInfoUpdateValidation() {};

    /**
     * ajax mathod
     */
    private ajaxGet(url: string, sendData: object) {};
    private ajaxPost(url: string, sendData: object) {
        Rx.Observable.ajax
        .post(url, sendData)
        .merge( (response) => {
            return response;
        })
        .mapTo( (response) => {
            return response;
        } );
    };

    /**
     * render
     */
    private render(path: string, number) {};
}
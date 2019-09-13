/**
 * Imports the LvBlog API URL from the config.
 */
import { LVBLOG_CONFIG } from '../config.js';

export default {
    /**
     * Post /captchas
     */
    getCaptchas: function (phone) {
        return axios.post(LVBLOG_CONFIG.API_URL + '/captchas/',
            {
                phone: phone,
            }
        );
    },
    getVerificationCodes: function (captcha_key, captcha_code, phone) {
        return axios.post(LVBLOG_CONFIG.API_URL + '/verificationCodes/',
            {
                captcha_key: captcha_key,
                captcha_code: captcha_code,
                phone: phone
            }
        );
    },
    postSignIn: function (verification_key, verification_code, name, password) {
        return axios.post(LVBLOG_CONFIG.API_URL + '/users',
            {
                verification_key: verification_key,
                verification_code: verification_code,
                name: name,
                password: password,
            }
        );
    },
    postSignUp: function (username, password) {
        return axios.post(LVBLOG_CONFIG.API_URL + '/authorizations',
            {
                username:username,
                password: password,
            }
        );
    },
    postSignInByOauth: function (code,social_type) {
        return axios.post(LVBLOG_CONFIG.API_URL + '/socials/'+social_type+'/authorizations',
            {
                code:code,
            }
        );
    },
}
const CommonFunc = {

    isValidatedEmail: (val) => {
        const value = val.trim();
        const re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
        if (value === undefined || value === '' || !re.test(value)) {
            return false;
        }
        return true;
    },

    isValidatedPassword: (val) => {
        const value = val;
        const re = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/igm;
        if (value === undefined || value === '' || !re.test(value)) {
            return false;
        }
        return true;
    },

    isValidatedPhone: (val) => {
        const value = val;
        const re = /[0-9][0-9][0-9]-[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]/;
        if (value === undefined || value === '' || !re.test(value)) {
            return false;
        }
        return true;
    },

    isExistEmptyValue: (object) => {
        if (!object){
            return true;
        }
        const keys = Object.keys(object);
        for (let i = 0; i < keys.length; i++) {
            if (!object[keys[i]] ){
                if ((typeof object[keys[i]]) === 'string' && String(object[keys[i]]).trim() === ''){
                    console.log('isExistEmptyValue', keys[i]);
                    return true;
                }
            }
        }
        return false;
    },
    isResponseSuccess:  (data) => {
        if (!data || data.status === undefined) {
            return false;
        }
        if (String(data.status).replace(',', '') === '0'){
            return true;
        }
        return false;
    }
}

export default CommonFunc;
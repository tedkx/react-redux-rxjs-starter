import { T_STR, T_OBJ, T_FUNC } from './Constants'

const Helper = {
    arrayToObject: (arr, keyProp) => {
        if(!Helper.isArray(arr))
            return null;
        if(typeof keyProp !== 'string' && typeof keyProp !== 'number')
            return null;

        let obj = {};
        for(let item of arr)
            obj[item[keyProp]] = item;
        return obj;
    },

    bind(component, functionNames) {
        if(Helper.isNil(component))
            return;

        if(typeof functionNames === T_STR) 
            if(Helper.isNullOrWhitespace(functionNames))
                return;
            else
                functionNames = [ functionNames ];
        
        if(!Helper.isArray(functionNames))
            return;
        
        for(let functionName of functionNames)
            if(typeof component[functionName] === T_FUNC)
                component[functionName] = component[functionName].bind(component);
    },

    getSubstringUntilNth: (str, pattern, n) => str.split(pattern, n).join(pattern),

    isArray: obj => Array.isArray(obj) || obj instanceof Array,
    isNil: obj => obj === void 0 || obj === null,
    isNullOrWhitespace: obj => typeof obj !== T_STR || obj.replace(/ /g, '').length === 0,
    isObject: obj => typeof obj === T_OBJ && obj !== null
}

export default Helper;
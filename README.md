# Rent House

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

is Palindrome Problem Solution:

    function isPalindrome(str){
        let flag = true;
        let Str = "";

        for(let i  = 0; i < str.length; i++)
        {
            if((str[i] >= 'a' && str[i]<= 'z') || (str[i]>= 'A' && str[i] <= 'Z') || (str[i]) >= '0' && str[i] <= '9')
            {
                Str += str[i];
            }
        }
        const newStr = Str.toLowerCase();
        for(let i = 0,j = newStr.length -1; i < (newStr.length-1)/2; i++,j--)
        {
            if(newStr[i] != newStr[j])
            {
                flag = false;
                break;
            }
        }
        if(flag) return true;
        else return false;
    }
    


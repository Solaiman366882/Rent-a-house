
const Call = () => {
    // function isPalindrome(str){
    //     let flag = true;
    //     let Str = "";

    //     for(let i  = 0; i < str.length; i++)
    //     {
    //         if((str[i] >= 'a' && str[i]<= 'z') || (str[i]>= 'A' && str[i] <= 'Z') || (str[i]) >= '0' && str[i] <= '9')
    //         {
    //             Str += str[i];
    //         }
    //     }
    //     const newStr = Str.toLowerCase();
    //     for(let i = 0,j = newStr.length -1; i < (newStr.length-1)/2; i++,j--)
    //     {
    //         if(newStr[i] != newStr[j])
    //         {
    //             flag = false;
    //             break;
    //         }
    //     }
    //     if(flag) return true;
    //     else return false;
    // }
    

    return (
        <div className="py-16 text-center bg-[#009DDE]">
            <h2 className="text-white robot-medium text-3xl">Want a House or Sell one? Call Us <strong>(+40) 723 185 011</strong></h2>
        </div>
    );
};

export default Call;
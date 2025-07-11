
export const AigaLogo = ({
    bgColor = 'bg-blue-600',
    txtColor = 'text-white',
    ...props
}) => 
{
  
    return (
    <div className={`flex items-center justify-center size-fit`}>
      <span className={`py-3 pr-3 pl-1 ${bgColor} ${txtColor} font-serif italic inline-block font-light`}>AIGA</span>
      <span className={`font-sans inline-block text-blue-600 inline-block ml-2 text-lg`}>Wichita</span>
    </div>
  );

};

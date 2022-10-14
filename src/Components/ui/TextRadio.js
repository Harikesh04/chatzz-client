import Typography from './Typography';

export default function TextRadio({
  selected = false,
  children,
  className,
  ...props
}) {
  return (
    <div {...props} className={`space-x-2 flex items-center ${className}`}>
      <span className='inline-block h-5 w-5 p-0.5 rounded-full flex justify-center items-center border-2 border-gray-500 '>
        {selected && (
          <div className='w-full h-full bg-blue-600 rounded-full '></div>
        )}
      </span>
      {children && <Typography>{children}</Typography>}
    </div>
  );
}

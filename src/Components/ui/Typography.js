export default function Typography({ children, type, className }) {
  switch (type) {
    case 'primary': {
      return (
        <h1
          className={`font-bold text-2xl text-gray-700 capitalize ${className}`}
        >
          {children}
        </h1>
      );
    }
    case 'secondary': {
      return <h2 className='text-blue-700 text-2xl font-bold'>{children}</h2>;
    }
    case 'caption': {
      return <h4 className={`text-base ${className}`}>{children}</h4>;
    }
    case 'description': {
      return (
        <p className={`text-xs text-gray-400 font-base ${className}`}>
          {children}
        </p>
      );
    }

    case 'section-heading': {
      return (
        <h2 className={`text-gray-800 text-base ${className}`}>{children}</h2>
      );
    }
    case 'section-description': {
      return (
        <p className={`text-gray-400 text-base font-semibold ${className} `}>
          {children}
        </p>
      );
    }

    case 'profile-heading': {
      return (
        <h4 className={`text-sm text-gray-600 font-medium ${className}`}>
          {children}
        </h4>
      );
    }
    default: {
      return <p className={`${className}`}>{children}</p>;
    }
  }
}

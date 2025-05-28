import { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthTabs, Ripple, TechOrbitDisplay } from '../components/ui/modern-animated-sign-in';

type FormData = {
  email: string;
  password: string;
};

interface LoginProps {
  setIsAuthenticated: (value: boolean) => void;
}

const iconsArray = [
  {
    component: () => (
      <img
        width={100}
        height={100}
        src="https://img.icons8.com/?size=100&id=v0493lw60209&format=png&color=000000"
        alt="Icon 1"
        className="w-[30px] h-[30px] rounded-full object-cover"
      />
    ),
    className: 'size-[30px] border-none bg-transparent',
    duration: 20,
    delay: 20,
    radius: 100,
    path: false,
    reverse: false,
  },
  {
    component: () => (
      <img
        width={100}
        height={100}
        src="https://img.icons8.com/?size=100&id=10289&format=png&color=000000"
        alt="Icon 2"
        className="w-[30px] h-[30px] rounded-full object-cover"
      />
    ),
    className: 'size-[30px] border-none bg-transparent',
    duration: 20,
    delay: 10,
    radius: 100,
    path: false,
    reverse: false,
  },
  {
    component: () => (
      <img
        width={100}
        height={100}
        src="https://img.icons8.com/?size=100&id=2Jv7M2wcxpBh&format=png&color=000000"
        alt="Icon 4"
        className="w-[30px] h-[30px] rounded-full object-cover"
      />
    ),
    className: 'size-[30px] border-none bg-transparent',
    duration: 20,
    delay: 30,
    radius: 100,
    path: false,
    reverse: false,
  },
  {
    component: () => (
      <img
        width={100}
        height={100}
        src="https://img.icons8.com/?size=100&id=2Jv7M2wcxpBh&format=png&color=000000"
        alt="Icon 5"
        className="w-[30px] h-[30px] rounded-full object-cover"
      />
    ),
    className: 'size-[30px] border-none bg-transparent',
    duration: 50,
    delay: 50,
    radius: 75,
    path: false,
    reverse: false,
  },
  {
    component: () => (
      <img
        width={100}
        height={100}
        src="https://img.icons8.com/?size=100&id=RrF4U2ogcU6A&format=png&color=000000"
        alt="Icon 6"
        className="w-[30px] h-[30px] rounded-full object-cover"
      />
    ),
    className: 'size-[30px] border-none bg-transparent',
    duration: 150,
    delay: 70,
    radius: 200,
    path: false,
    reverse: false,
  },
  {
    component: () => (
      <img
        width={100}
        height={100}
        src="https://img.icons8.com/?size=100&id=hjLvy3uou8Av&format=png&color=000000"
        alt="Icon 7"
        className="w-[30px] h-[30px] rounded-full object-cover"
      />
    ),
    className: 'size-[30px] border-none bg-transparent',
    duration: 10,
    delay: 90,
    radius: 150,
    path: false,
    reverse: false,
  },
  // Add more icons as needed
];

const Login: React.FC<LoginProps> = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });
  const [emailError, setEmailError] = useState<string>('');
  const [isResetMode, setIsResetMode] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement>,
    name: keyof FormData
  ) => {
    const value = event.target.value;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (name === 'email') {
      if (!validateEmail(value)) {
        setEmailError('Please enter a valid email address.');
      } else {
        setEmailError('');
      }
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateEmail(formData.email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }
    console.log('Form submitted', formData);
    // TODO: Add actual authentication logic here
    setIsAuthenticated(true);
    navigate('/dashboard');
  };

  const handleResetPassword = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateEmail(formData.email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }
    // TODO: Implement actual password reset logic
    console.log('Password reset requested for:', formData.email);
    alert('If this email exists in our system, you will receive reset instructions shortly.');
  };

  const goToForgotPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsResetMode(true);
  };

  const goBackToLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsResetMode(false);
    setEmailError('');
  };

  const formFields = {
    header: isResetMode ? 'Reset Password' : 'Welcome back',
    subHeader: isResetMode 
      ? 'Enter your email to receive reset instructions' 
      : 'Sign in to your account',
    fields: [
      {
        label: 'Email',
        required: true,
        type: 'email' as const,
        placeholder: 'Enter your email address',
        onChange: (event: ChangeEvent<HTMLInputElement>) =>
          handleInputChange(event, 'email'),
      },
      ...(isResetMode ? [] : [
        {
          label: 'Password',
          required: true,
          type: 'password' as const,
          placeholder: 'Enter your password',
          onChange: (event: ChangeEvent<HTMLInputElement>) =>
            handleInputChange(event, 'password'),
        }
      ]),
    ],
    submitButton: isResetMode ? 'Send Reset Link' : 'Sign in',
    textVariantButton: isResetMode ? 'Back to Login' : 'Forgot password?',
    errorField: emailError,
  };

  return (
    <section className="flex max-lg:justify-center bg-white dark:bg-zinc-950 min-h-screen">
      <span className="flex flex-col justify-center w-1/2 max-lg:hidden">
        <Ripple mainCircleSize={100} />
        <TechOrbitDisplay iconsArray={iconsArray} />
      </span>

      <span className="w-1/2 h-[100dvh] flex flex-col justify-center items-center max-lg:w-full max-lg:px-[10%]">
        <AuthTabs
          formFields={formFields}
          goTo={isResetMode ? goBackToLogin : goToForgotPassword}
          handleSubmit={isResetMode ? handleResetPassword : handleSubmit}
          additionalButton={
            <a
              href="/create-account"
              className="text-sm text-primary hover:underline cursor-pointer"
            >
              Create Account
            </a>
          }
        />
      </span>
    </section>
  );
};

export default Login;

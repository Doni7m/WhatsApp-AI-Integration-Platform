import { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { PricingDemo } from '../components/ui/demo';

type FormData = {
  email: string;
  password: string;
  confirmPassword: string;
};

const CreateAccount = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [confirmPasswordError, setConfirmPasswordError] = useState<string>('');

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
    if (name === 'password') {
      if (value.length < 6) {
        setPasswordError('Password must be at least 6 characters.');
      } else {
        setPasswordError('');
      }
    }
    if (name === 'confirmPassword') {
      if (value !== formData.password) {
        setConfirmPasswordError('Passwords do not match.');
      } else {
        setConfirmPasswordError('');
      }
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateEmail(formData.email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }
    if (formData.password.length < 6) {
      setPasswordError('Password must be at least 6 characters.');
      return;
    }
    if (formData.confirmPassword !== formData.password) {
      setConfirmPasswordError('Passwords do not match.');
      return;
    }
    // TODO: Add actual account creation logic here, including payment processing
    console.log('Account created', formData);
    alert('Account created successfully!');
    navigate('/login');
  };

  return (
    <section className="flex flex-col items-center bg-white dark:bg-zinc-950 min-h-screen p-6">
      <h1 className="text-3xl font-semibold mb-6 text-center text-foreground dark:text-foreground">
        Create Account
      </h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-background dark:bg-zinc-900 p-6 rounded-lg shadow-md mb-10"
      >
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) => handleInputChange(e, 'email')}
            className="w-full rounded border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-primary"
            required
          />
          {emailError && (
            <p className="mt-1 text-xs text-destructive">{emailError}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-1 text-sm font-medium">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={(e) => handleInputChange(e, 'password')}
            className="w-full rounded border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-primary"
            required
          />
          {passwordError && (
            <p className="mt-1 text-xs text-destructive">{passwordError}</p>
          )}
        </div>
        <div className="mb-6">
          <label
            htmlFor="confirmPassword"
            className="block mb-1 text-sm font-medium"
          >
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={(e) => handleInputChange(e, 'confirmPassword')}
            className="w-full rounded border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-primary"
            required
          />
          {confirmPasswordError && (
            <p className="mt-1 text-xs text-destructive">{confirmPasswordError}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full rounded bg-primary px-4 py-2 text-white hover:bg-primary/90"
        >
          Create Account
        </button>
      </form>
      <PricingDemo />
    </section>
  );
};

export default CreateAccount;

import StripeCheckout from 'react-stripe-checkout';

const STRIPE_PUBLISHABLE =
  'pk_live_51Iz2hJG5mUGsiZOmYocEj7pG5ZuTX7941WqIu5lHBZ1OiCHjn2E5IvlaRCRKCnWaEYm0nW9DGlsz7XqdRlRLk5CZ00u0sjaWVl';

const onToken = (user, checkout) => (token) => checkout(user, token.id);

const Checkout = ({ amount, user, checkout }) => (
  <StripeCheckout
    amount={amount * 100}
    token={onToken(user, checkout)}
    currency='INR'
    stripeKey={STRIPE_PUBLISHABLE}
  />
);

export default Checkout;

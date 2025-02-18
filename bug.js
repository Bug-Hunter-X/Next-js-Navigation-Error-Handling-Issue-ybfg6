```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/another-page');
    // Some asynchronous operation that might throw an error
    doSomethingAsync().catch(error => {
      // Error handling logic, but this might not work as expected
      console.error('Error:', error);
    });
  };

  return (
    <button onClick={handleClick}>Go to Another Page</button>
  );
}

async function doSomethingAsync() {
  // Simulate an asynchronous operation that might fail
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate a random error
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        reject(new Error('Something went wrong!')
      );
      } else {
        resolve();
      }
    }, 1000);
  });
}

export default MyComponent;```
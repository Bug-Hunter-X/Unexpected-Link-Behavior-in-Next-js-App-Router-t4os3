```javascript
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function MyComponent() {
  const router = useRouter();

  const handleAboutClick = (e) => {
    e.preventDefault();
    router.push('/about');
  };

  return (
    <div>
      <a href="/about" onClick={handleAboutClick}>
        About Us
      </a>
    </div>
  );
}

export default MyComponent;
```
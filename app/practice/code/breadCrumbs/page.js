import Link from 'next/link';

const Breadcrumbs = ({ breadcrumbs }) => {
  return (
    <nav>
      {breadcrumbs.map((breadcrumb, index) => (
        <span key={breadcrumb.path}>
          <Link href={breadcrumb.path}>
            {breadcrumb.label}
          </Link>
          {index < breadcrumbs.length - 1 && ' > '}
        </span>
      ))}
    </nav>
  );
};

const MyPage = ({ breadcrumbs }) => {
  return (
    <div>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <h1>Page Content</h1>
    </div>
  );
};

// Example breadcrumb data
const breadcrumbs = [
  { label: 'Home', path: '/' },
  { label: 'Category', path: '/category' },
  { label: 'Subcategory', path: '/category/subcategory'},
];

const MyPageWithBreadcrumbs = () => {
  return <MyPage breadcrumbs={breadcrumbs} />;
};

export default MyPageWithBreadcrumbs;

/**
 * Yes, that's correct! To create breadcrumbs for your website, you would typically define the URLs and corresponding labels for each breadcrumb item in an array of objects.

Each object in the array represents a breadcrumb item and consists of a `label` and a `path`. The `label` is the text to display for the breadcrumb, and the `path` is the URL or route it corresponds to.

By defining all the URLs and labels in an array of objects, you can dynamically generate the breadcrumbs based on the current page or route.

Here's an example:

```jsx
import Link from 'next/link';

const Breadcrumbs = ({ breadcrumbs }) => {
  return (
    <nav>
      {breadcrumbs.map((breadcrumb, index) => (
        <span key={breadcrumb.path}>
          <Link href={breadcrumb.path}>
            <a>{breadcrumb.label}</a>
          </Link>
          {index < breadcrumbs.length - 1 && ' / '}
        </span>
      ))}
    </nav>
  );
};

const MyPage = () => {
  // Define the breadcrumb data for the page
  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Category', path: '/category' },
    { label: 'Subcategory', path: '/category/subcategory' },
  ];

  return (
    <div>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <h1>Page Content</h1>
    </div>
  );
};

export default MyPage;
```

In this example, the `MyPage` component defines the breadcrumb data specific to that page. You can define the breadcrumbs based on the page's hierarchy or the user's navigation path.

By passing the `breadcrumbs` array as a prop to the `Breadcrumbs` component, you can dynamically render the breadcrumb links based on the provided data.

Remember to customize the breadcrumb data and structure to match your website's URL structure and navigation hierarchy.
 */
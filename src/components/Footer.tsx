export default function Footer() {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white p-6 text-center mt-auto">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} Netportal Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
}

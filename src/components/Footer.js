import {memo} from 'react';
function Footer() {
  return (
    <footer>
      <div className="link">
        <a
          href="https://covindia.info"
          target="_blank"
          rel="noopener noreferrer"
        >
          covindia
        </a>
      </div>
    </footer>
  );
}

export default memo(Footer);

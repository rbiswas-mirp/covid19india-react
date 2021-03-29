import {memo} from 'react';
import {Twitter, GitHub, Database, Mail, Send} from 'react-feather';
import {useTranslation} from 'react-i18next';

function Footer() {
  const {t} = useTranslation();

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

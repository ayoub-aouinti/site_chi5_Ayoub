import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="py-12 border-t border-foreground/5 bg-background text-foreground">
      <div className="container mx-auto px-6 text-center">
        <p className="font-cairo text-foreground/50">
          {t('footer.copyright')} &copy; {new Date().getFullYear()}
        </p>
        <p className="mt-2 text-sm text-foreground/30 font-cairo">
          {t('footer.bio')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;

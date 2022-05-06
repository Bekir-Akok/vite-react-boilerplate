import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

//local imports
import { LanguageSwitcher } from 'components';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      <Typography variant="h6" className="text-blue-500 mb-24">
        {t('Hi')}
      </Typography>
      <LanguageSwitcher />
    </div>
  );
};

export default Home;

import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { GOOGLE_FORMS } from '@/lib/utils/constants';

export function useAppNavigation() {
  const navigate = useNavigate();

  const goToSchedule = useCallback(() => {
    navigate('/schedule');
  }, [navigate]);

  const goToRegistration = useCallback(() => {
    window.open(GOOGLE_FORMS.REGISTRATION, '_blank');
  }, []);

  return {
    goToSchedule,
    goToRegistration
  };
}
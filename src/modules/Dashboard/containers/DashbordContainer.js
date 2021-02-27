import React, {useState, useCallback, useEffect} from 'react';

import Dashboard from '../components/Dashboard';
import useTheme from '../../../common/Theme/useTheme';
import navigation from '../../../services/navigation';
import {login} from '../../Auth/services';

const DashboardContainer = (props) => {
  const [posts, setPosts] = useState(null);

  const theme = useTheme();

  const navigateToSignIn = useCallback(() => {
    navigation.navigate('Authentication');
  }, []);

  useEffect(() => {
    login().then((res) => {
      setPosts(res.data);
    });
  }, []);
  return (
    <Dashboard
      navigateToSignIn={navigateToSignIn}
      theme={theme}
      posts={posts}
    />
  );
};

export default DashboardContainer;

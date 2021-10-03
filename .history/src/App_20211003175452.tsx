import { Provider } from 'react-redux';

import { AppLayout } from './components';
import { UserSearch } from './modules/UserSearch';
import store from './store/store';

const App = () => {
    return (
        <Provider store={store}>
            <AppLayout>
                <UserSearch />
            </AppLayout>
        </Provider>
    );
};

export default App;

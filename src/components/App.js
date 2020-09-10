import React from 'react';
import axios from 'axios';
import { SearchBar } from './SearchBar/SearchBar';
import { apiKey } from './Query';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
import Loader from 'react-loader-spinner';
import { LoaderStyle } from './styles/style.module.css';
// import { Route, Switch, NavLink } from 'react-router-dom';
import { Button } from './Button/Button';

export class App extends React.Component {
  state = {
    query: '',
    page: 1,
    data: [],
    isLoading: false,
    isOpenModal: false,
    bigImageSrc: '',
  };

  getData = async (query, page = 1) => {
    this.setState({ isLoading: true });
    try {
      const picturesData = await axios.get(
        `https://pixabay.com/api/?q=${query}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=15`,
      );
      this.setState(prev => ({
        data:
          prev.data.length === 0
            ? [...picturesData.data.hits]
            : [...prev.data, ...picturesData.data.hits],
      }));
    } catch (err) {
      console.log(err);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  scrollWindow = () =>
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });

  getPage = async () => {
    await this.setState({ page: this.state.page + 1 });
    await this.getData(this.state.query, this.state.page);
    this.scrollWindow();
  };

  getInput = async input => {
    await this.setState({ query: input, page: 1, data: [] });
    this.getData(this.state.query);
  };

  toggleModal = () =>
    this.setState({
      isOpenModal: !this.state.isOpenModal,
      bigImageSrc: this.bigImageSrc && '',
    });

  modalWindow = async image => {
    this.toggleModal();
    await this.setState({ bigImageSrc: image });
  };

  render() {
    const { data, isLoading, isOpenModal, bigImageSrc } = this.state;
    return (
      <>
        <SearchBar onSubmit={this.getInput} />
        {!!data.length && <ImageGallery data={data} modal={this.modalWindow} />}
        {isOpenModal && (
          <Modal src={bigImageSrc} toggleModal={this.toggleModal} />
        )}
        {isLoading ? (
          <Loader
            className={LoaderStyle}
            type="ThreeDots"
            color="orange"
            height={80}
            width={80}
          />
        ) : (
          !!data.length && <Button onClick={this.getPage} />
        )}
      </>
    );
  }
}

// const Home = () => <h2>Home</h2>;

// const Profile = () => <h2>Profile</h2>;

// const Menu = ({ history }) => (
//   <>
//     <h2>Menu</h2>
//     <button onClick={() => history.goBack}>Back</button>
//   </>
// );

// const notFound = () => <h2>Not Found</h2>;

// export const App = props => (
//   <>
//     <ul>
//       <li>
//         <NavLink exact to="/">
//           Go home
//         </NavLink>
//       </li>
//       <li>
//         <NavLink to="/profile">Profile</NavLink>
//       </li>
//       <li>
//         <NavLink to="/menu">Menu</NavLink>
//       </li>
//       <li>
//         <NavLink to="/todo">Todo</NavLink>
//       </li>
//       <li></li>
//     </ul>
//     <Switch>
//       <Route exact path="/" component={Home} />
//       <Route path="/profile" component={Profile} />
//       <Route path="/menu" component={Menu} />
//       <Route path="/todo" component={ToDo} />
//       <Route component={notFound} />
//     </Switch>
//   </>
// );

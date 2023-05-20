import { useEffect, useState } from 'react';
import Loader from '../../components/Loader/Loader';
import Searchbar from '../../components/Searchbar/Searchbar';
import UsersList from '../../components/UsersList/UsersList';
import { useGetUsersQuery } from '../../redux/usersApi';
import { useSelector } from 'react-redux';
import { selectfiltredUser, selectCurrentUsers } from '../../redux/selectors';
import { useLocation, useNavigate } from 'react-router-dom';
import { TbArrowBackUp, TbArrowBarToUp } from 'react-icons/tb';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import { ButtonLink } from 'components/SharedLayout/SharedLayout';

const Scroll = require('react-scroll');

const Tweets = () => {
  const scroll = Scroll.animateScroll;
  const location = useLocation();
  const navigate = useNavigate();
  const backLinkHref = location.pathname.from ?? '/';
  const [page, setPage] = useState(1);
  const { data, isLoading, isFetching, isError } = useGetUsersQuery(page);
  const users = useSelector(selectfiltredUser);
  const totalLoads = useSelector(selectCurrentUsers);
  const [loadMore, setLoadMore] = useState(true);

  const showList = !isLoading && !isError;
  const showLoader = (isFetching || isLoading) && !isError;
  const title = `Load user card  ${totalLoads.length} : Show user card ${users.length}`;

  useEffect(() => {
    data?.length < 3 && setLoadMore(false);
    isError && ErrorMessage('Щось пішло не так');
  }, [data, isError]);

  const handleClick = evt => {
    evt.target.blur();
    setPage(page + 1);
    scroll.scrollToBottom();
  };

  return (
    <div className="w-full mx-auto text-center">
      <Searchbar />

      {showList && <UsersList title={title} users={users} />}
      <div className="flex gap-10 justify-center">
        <ButtonLink link={() => navigate(backLinkHref)}>
          {' '}
          <span className="text-[30px]">
            <TbArrowBackUp />
          </span>
          Go home
        </ButtonLink>

        <button
          disabled={!loadMore}
          onClick={handleClick}
          style={{
            '--isloadMore': loadMore ? '#EBD8FF' : '',
            '--isNoloadMore': loadMore ? '#5CD3A8' : '',
          }}
          className="mb-9 mt-9 w-[196px] h-[50px] bg-[var(--isloadMore)] hover:bg-[var(--isNoloadMore)] rounded-xl
      font-['MontserratSemiBold'] font-semibold uppercase text-lg/[22px] text-[#373737]
      shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition-all duration-[250]   hover:shadow-mm 
      hover:shadow-[#373737] hover:scale-[1.01] "
        >
          {loadMore ? 'Load' : 'No'} more
          {showLoader && <Loader />}
        </button>

        <ButtonLink link={() => scroll.scrollToTop()}>
          Go top
          <span className="text-[30px]">
            <TbArrowBarToUp />
          </span>
        </ButtonLink>
      </div>
    </div>
  );
};

export default Tweets;

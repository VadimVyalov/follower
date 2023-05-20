import PropTypes from 'prop-types';
import { useSetFollowersMutation } from '../../redux/usersApi';
import toast from 'react-hot-toast';

const imgUrl = new URL('../../images/following.png', import.meta.url).href;

const UserCard = ({ userInfo }) => {
  const [setFollowers] = useSetFollowersMutation();

  const handleFollow = id => {
    toast.promise(
      setFollowers({
        id,
        followers: userInfo.followers - userInfo.following * 2 + 1,
      }).unwrap(),
      {
        loading: 'wait...',
        success: !userInfo.following
          ? `${userInfo.name} says thank you`
          : `${userInfo.name} is talking shit`,
        error: error => ` Error ${error?.data?._message}`,
      }
    );
  };

  return (
    <div
      className="  w-[380px] h-[460px] rounded-[20px] shadow-[-3px_7px_21px_rgba(0,0,0,0.23)]
  bg-gradient-to-br from-[#471CA9] from-0% via-[#5736A3] via-55% to-[#4B2A99] to-80% 
  transition-all duration-300 hover:shadow-[0px_4px_15px_5px_#2503415a]"
    >
      <div
        style={{ '--image-url': `url(${imgUrl})` }}
        className="  w-full h-full bg-[image:var(--image-url)] rounded-[20px] flex  items-center flex-col justify-end"
      >
        <img
          className="w-[64px] h-64[px] mb-8 rounded-full"
          src={
            userInfo.avatar
              ? userInfo.avatar
              : `https://via.placeholder.com/80x80/cccccc/db0404.jpg?text=NA`
          }
          width={66}
          height={66}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src =
              'https://via.placeholder.com/80х80/cccccc/db0404.jpg?text=NA';
          }}
          alt={`${userInfo.name}`}
          title={`${userInfo.name}`}
        />
        <p className="mb-4 font-['MontserratMedium'] font-medium uppercase text-xl/[24px] text-[#EBD8FF]">{`tweets ${userInfo.tweets} `}</p>
        <p className="mb-7 font-['MontserratMedium'] font-medium uppercase text-xl/[24px] text-[#EBD8FF]">{`followers ${userInfo.followers
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')} `}</p>

        <button
          onClick={() => handleFollow(userInfo.id)}
          style={{
            '--isFolloving': userInfo.following ? '#5CD3A8' : '#EBD8FF',
          }}
          className="mb-9  w-[196px] h-[50px] bg-[var(--isFolloving)] rounded-xl
      font-['MontserratSemiBold'] font-semibold uppercase text-lg/[22px] text-[#373737]
      shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition-all duration-[250]   
      hover:shadow-mm hover:shadow-[2px_4px_6px_2px_#1d0136cc] hover:scale-[1.01]"
        >
          {userInfo.following ? 'Following' : 'Follow'}
        </button>
      </div>
    </div>
  );
};

UserCard.prototype = {
  userInfo: PropTypes.shape,
};

export default UserCard;

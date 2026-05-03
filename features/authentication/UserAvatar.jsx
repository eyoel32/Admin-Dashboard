import styled from "styled-components";
import { useUser } from "./useUser";

const StyledUserAvatar = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--color-grey-600);
`;

const Avatar = styled.img`
  display: block;
  width: 3.6rem;
  width: 4rem; /* Adjusted for better visibility */
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-100);
`;

function UserAvatar() {
  const { user, isLoading } = useUser();

  // 1. Handle the loading state so fullName isn't 'undefined' on first render
  if (isLoading) return null;

  // 2. Destructure the data from Supabase/Auth metadata
  // Note: Ensure your signup logic stores it exactly as 'fullName'
  const { fullName, avatar } = user?.user_metadata || {};

  return (
    <StyledUserAvatar>
      <Avatar
        src={avatar || "default-user.jpg"}
        alt={`Avatar of ${fullName || 'user'}`}
      />
      {/* 3. This span renders the name next to the image */}
      <span>{fullName}</span>
    </StyledUserAvatar>
  );
}

export default UserAvatar;
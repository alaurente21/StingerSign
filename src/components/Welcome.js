import React, { useEffect } from "react";
import Profile from "./Profile/Profile";
import { navigate } from "@reach/router";
import { useDispatch } from "react-redux";
import SignList from "./Lists/SignList";
import SignedList from "./Lists/SignedList";
import { resetDocToView } from "./ViewDocument/ViewDocumentSlice";
import { resetDocToSign } from "./SignDocument/SignDocumentSlice";
import { Box, Button, Container, Heading } from "gestalt";
import "gestalt/dist/gestalt.css";

const ProfilePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetDocToView());
    dispatch(resetDocToSign());
  }, [dispatch]);

  return (
    <div class="welcome-main-component">
      <Profile />
      <Container>
        <div class="welcome-container">
          <div class="sign-documents-container">
            <Box padding={3}>
              <h2>{`Sign Documents`}</h2>
            </Box>
            <Box marginStart={5} marginTop={-5}>
              <SignList />
            </Box>
          </div>
          <div class="prepare-documents-container">
            <Box padding={3}>
              <h2>{`Prepare Document`}</h2>
            </Box>
            <Box marginStart={3} marginTop={-4}>
              <Button
                onClick={(event) => {
                  navigate(`/assignUsers`);
                }}
                text="Prepare Document for Signing"
                color="blue"
                inline
              />
            </Box>
          </div>
          <div class="review-documents-container">
            <Box padding={3}>
              <h2>{`Review Signed Documents`}</h2>
            </Box>
            <Box marginStart={5} marginTop={-5}>
              <SignedList />
            </Box>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default ProfilePage;

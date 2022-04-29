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
        <div class="prepare-documents-container">
            <Box padding={3}>
              <h2 color="004e38">{`Prepare StingerDoc`}</h2>
            </Box>
            <Box marginStart={3} marginTop={-4}>
              <Button
                onClick={(event) => {
                  navigate(`/assignUsers`);
                }}
                text="Prepare StingerDoc for Signing"
                color="black"
                inline
              />
            </Box>
          </div>  
        <div class="welcome-container">
          <div class="sign-documents-container">
            <Box padding={3}>
              <h2 color="004e38">{`Sign StingerDoc`}</h2>
            </Box>
            <Box marginStart={5} marginTop={-5}>
              <SignList />
            </Box>
          </div>

        </div>
      </Container>
    </div>
  );
};
export default ProfilePage;

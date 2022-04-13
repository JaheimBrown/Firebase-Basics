import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #fff;
  max-width: 1000px;
  height: calc(100vh - 50px);
  max-height: 650px;
  margin: 1.5em auto;
  border-radius: 24px;
  box-shadow: -12px -12px 24px #f5f5f5, 12px 12px 24px #f5f5f5;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .image-container {
    flex: 1.1;
    width: 100%;
    height: 100%;
    border-radius: 24px 0 0 24px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 24px 0 0 24px;
    }
  }

  .content {
    flex: 1;
    height: 100%;
    width: 100%;
    padding: 1.5em;

    .logo {
      font-weight: bold;
      font-size: 20px;
      line-height: 30px;
      color: #343434;
    }

    .heading {
      margin: 2rem 0;

      h2 {
        font-weight: 700;
        font-size: 26px;
        line-height: 39px;
        color: #000000;
        margin-bottom: 0.5rem;
      }

      p {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #343434;

        a {
          color: #340fc9;
        }
      }
    }

    form {
      .field {
        position: relative;
        border: 1px solid red;
        width: 100%;
        height: 100%;
        font-size: 16px;
        margin-bottom: 1.25rem;
        outline: none;
        transition: color 0.3s ease-in-out;
        outline: none;
          border: 0;

        input{
          width: 100%;
          height: 100%;
          padding: 16px 24px;
          outline: none;
          border: 0;
          border: 1px solid rgba(0, 0, 0, 0.3);
          border-radius: 12px;
          font-family: "Poppins", sans-serif;
          font-size: 16px;

          &:focus ~ label,
          &:not(:placeholder-shown)  ~ label,
          &:valid:not(:focus) ~ label{
            transform: translateY(-26px);
            background-color: #FFF;
            padding-inline: 5px;
            font-size: 14px;
          }

          &:focus {
            outline: 2px solid #340fc9;
          }

          &::placeholder{
            color: transparent;
          }
        }

        label {
          position: absolute;
          top: 16px;
          left: 24px;
          font-family: "Poppins";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          color: #343434;
          transition: transform .3s ease;
        }
        
      } 

      button {
        background: #340fc9;
        box-shadow: 12px 12px 24px rgba(52, 15, 201, 0.3);
        border-radius: 12px;
        font-family: "Poppins";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #ffffff;
        outline: none;
        border: none;
        cursor: pointer;
        width: 100%;
        padding: 16px 24px;
        transition: all 0.2s ease;

        &:hover {
          box-shadow: 12px 12px 24px rgba(52, 15, 201, 0.5);
        }
      }
    }

      
    }

    .divider {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 1.25rem 0;

      p {
        text-align: center;
        margin-inline: 0.5rem;
      }

      .line {
        flex: 1;
        display: block;
        height: 2px;
        background-color: rgba(0, 0, 0, 0.1);
        width: 100%;
      }
    }

    .other-method {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;

      button {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 12px;
        font-family: "Poppins";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        padding: 16px 24px;
        color: #000000;
        outline: none;
        cursor: pointer;

        img {
          margin-right: 10px;
        }
      }

      .google {
        background: #fff;
        box-shadow: 12px 12px 24px #f5f5f5;
        border: 1px solid rgba(0, 0, 0, 0.1);
        transition: all 0.2s ease;

        &:hover {
          border: 1px solid rgba(0, 0, 0, 0.25);
        }
      }

      .github {
        background: #363636;
        color: #fff;
        box-shadow: 12px 12px 24px rgba(54, 54, 54, 0.2);
        border: 0;
        transition: all 0.2s ease;

        &:hover {
          box-shadow: 12px 12px 24px rgba(54, 54, 54, 0.6);
        }
      }
    }
  }
`;

import styled from 'styled-components';

export const LoginButton = styled.button`
  width: 90%;
  color: ${({ buttonActive }) => (buttonActive ? 'white' : '#c8c8c8')};
  background: ${({ buttonActive }) => (buttonActive ? '#ff3d00' : '#f1f1f1')};
  border: none;
  border-radius: 6px;
  padding: 0.8rem 0;
  position: absolute;
  bottom: -90px;
  cursor: pointer;
`;

export const FindPassWord = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  & a {
    color: #666;
  }
`;

export const InputWrap = styled.div`
  position: relative;
  margin-bottom: 30px;
  border-bottom: 1px solid #cacaca;
  background-color: transparent;
  border-radius: 0;
  display: flex;

  & input {
    font-family: inherit;
    font-size: inherit;
    outline: 0;
    border: 0;
    font-weight: 500;
    display: block;
    width: 100%;
    padding: 10px 10px;

    &::-webkit-input-placeholder {
      font-size: 0.8rem;
      color: #cacaca;
    }
  }
  & button {
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0icHJlZml4X19hIiBkPSJNMTguNDQ0IDBMMiAxNi4xMjkgMCAxMS4xOSAxLjAwNiA0LjQzIDExLjM3MSAxLjgyeiIvPgogICAgICAgIDxwYXRoIGlkPSJwcmVmaXhfX2MiIGQ9Ik0xNi41MjMgMEwwLjY0NiAxNS4wMTUgMTkgMTUuMjM2IDE5IDEuMzk0eiIvPgogICAgPC9kZWZzPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMikiPgogICAgICAgIDxwYXRoIGQ9Ik0yIDBIMjJWMjBIMnoiLz4KICAgICAgICA8cGF0aCBzdHJva2U9IiNDOEM4QzgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjIiIGQ9Ik0xOC4wNjIgNEw1LjY3MyAxNi4yNjciLz4KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDEuNDI2KSI+CiAgICAgICAgICAgIDxtYXNrIGlkPSJwcmVmaXhfX2IiIGZpbGw9IiNmZmYiPgogICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcHJlZml4X19hIi8+CiAgICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgICAgPHBhdGggc3Ryb2tlPSIjQzhDOEM4IiBzdHJva2Utd2lkdGg9IjEuMiIgZD0iTTEyIDMuMTc0Yy0yLjIzNSAwLTQuMjg5Ljc0Mi01LjkxMSAxLjcxNkM0LjA2OCA2LjEwMiAyLjYgNy42ODQgMi42IDguNTc0YzAgLjg5IDEuNDY4IDIuNDcyIDMuNDg5IDMuNjg0IDEuNjIyLjk3NCAzLjY3NiAxLjcxNiA1LjkxMSAxLjcxNiAyLjIzNSAwIDQuMjg5LS43NDIgNS45MTEtMS43MTYgMi4wMjEtMS4yMTIgMy40ODktMi43OTQgMy40ODktMy42ODQgMC0uODktMS40NjgtMi40NzItMy40ODktMy42ODRDMTYuMjkgMy45MTYgMTQuMjM1IDMuMTc0IDEyIDMuMTc0eiIgbWFzaz0idXJsKCNwcmVmaXhfX2IpIi8+CiAgICAgICAgPC9nPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMgMi45NDYpIj4KICAgICAgICAgICAgPG1hc2sgaWQ9InByZWZpeF9fZCIgZmlsbD0iI2ZmZiI+CiAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwcmVmaXhfX2MiLz4KICAgICAgICAgICAgPC9tYXNrPgogICAgICAgICAgICA8cGF0aCBzdHJva2U9IiNDOEM4QzgiIHN0cm9rZS13aWR0aD0iMS4yIiBkPSJNOSAxLjY1NGMtMi4yMzUgMC00LjI4OS43NDItNS45MTEgMS43MTZDMS4wNjggNC41ODItLjQgNi4xNjQtLjQgNy4wNTRjMCAuODkgMS40NjggMi40NzIgMy40ODkgMy42ODQgMS42MjIuOTc0IDMuNjc2IDEuNzE2IDUuOTExIDEuNzE2IDIuMjM1IDAgNC4yODktLjc0MiA1LjkxMS0xLjcxNkMxNi45MzIgOS41MjYgMTguNCA3Ljk0NSAxOC40IDcuMDU0YzAtLjg5LTEuNDY4LTIuNDcyLTMuNDg5LTMuNjg0QzEzLjI5IDIuMzk2IDExLjIzNSAxLjY1NCA5IDEuNjU0eiIgbWFzaz0idXJsKCNwcmVmaXhfX2QpIi8+CiAgICAgICAgPC9nPgogICAgICAgIDxjaXJjbGUgY3g9IjEyIiBjeT0iMTAiIHI9IjIuNCIgc3Ryb2tlPSIjQzhDOEM4IiBzdHJva2Utd2lkdGg9IjEuMiIvPgogICAgPC9nPgo8L3N2Zz4K)
      50% 50% no-repeat;
    width: 20px;
    height: 20px;
    position: absolute;
    right: 20px;
    text-indent: -999em;
    overflow: hidden;
    top: 50%;
    transform: translateY(-50%);
    display: block;
    border: none;
    cursor: pointer;
  }
`;

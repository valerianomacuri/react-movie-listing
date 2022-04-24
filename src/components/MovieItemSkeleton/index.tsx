import styled, { css } from "styled-components"
const styles = css`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 8px 8px 16px;
    width: 100%;
    height: 512px;
    background: ${theme.colors.grey[900]};
    backdrop-filter: blur(80px);
    border-radius: 12px;
    position: relative;

    & > div:first-child {
      background: ${theme.colors.grey[800]};
      border-radius: 8px;
      width: 100%;
      height: 400px;
    }

    & > div:nth-child(2) {
      position: absolute;
      width: 60px;
      height: 32px;
      left: 16px;
      top: 16px;
      background: rgba(0, 0, 0, 0.2);
      backdrop-filter: blur(8px);
      border-radius: 8px;
    }
    & > div:nth-child(3) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 24px;
      padding: 8px;

      width: 190px;
      height: 72px;
      padding-top: 16px;

      & > div:first-child {
        width: 150px;
        height: 16px;
        padding: 8px;
        background: ${theme.colors.grey[800]};
        border-radius: 8px;
      }
      & > div:nth-child(2) {
        display: flex;
        gap: 8px;
        & > span:first-child {
          width: 16px;
          height: 16px;
          background: ${theme.colors.grey[800]};
          border-radius: 8px;
        }
        & > span:nth-child(2) {
          width: 150px;
          height: 16px;
          padding: 8px;
          background: ${theme.colors.grey[800]};
          border-radius: 8px;
        }
      }
    }
  `}
`

export const MovieItemSkeleton = styled(({ ...rest }) => {
  return (
    <div {...rest}>
      <div></div>
      <div></div>
      <div>
        <div></div>
        <div>
          <span></span> <span></span>
        </div>
      </div>
    </div>
  )
})`
  ${styles}
`

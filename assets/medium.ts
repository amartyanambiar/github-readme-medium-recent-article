export default ({ title, description, date, url, thumbnail }) => `
<svg fill="none" width="800" height="120" xmlns="http://www.w3.org/2000/svg">
	<foreignObject width="100%" height="100%">
		<div xmlns="http://www.w3.org/1999/xhtml">
			<style>
				*{
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: sans-serif
				}
        @keyframes gradientBackground {
					0% {
						background-position-x: 0%;
					}
					100% {
						background-position-x: 100%;
					}
				}
				.flex {
					display: flex;
					align-items:center;
        }
        .outer-container{
          height:120px;
        }
				.container{
          height: 118px;
          border: 1px solid rgba(0,0,0,.2);
          padding: 10px 20px;
          border-radius: 10px;
          background: rgb(0,0,0);
          background: linear-gradient(60deg, rgb(0,0,0) 0%, rgb(0,0,0) 47%, rgb(0,0,0) 50%, rgb(0,0,0) 53%, rgb(0,0,0) 100%);
          background-size: 600% 400%;
          animation: gradientBackground 3s ease infinite;
          overflow: hidden;
          text-overflow: ellipsis;
				}
        img {
          margin-right: 10px;
          width: 150px;
          height: 100%;
          object-fit: cover;
        }
        .right{
          flex: 1;
        }
        a{
          text-decoration: none;
          color: inherit
        }
        p {
          line-height: 1.5;
          color: #555
        }
        h3{
          color: #7CFC00
        }
        small{
          color: #7CFC00;
          display: block;
          margin-top: 5px;
          margin-bottom: 8px
        }
				
			</style>
      <div class="outer-container flex">
        <a class="container flex" href="${url}" target="__blank">
					<img src="${thumbnail}"/>
          <div class="right">
            <h3>${title}</h3>
            <small>${date}</small>
            <p>${description}</p>
          </div>
				</a>
      </div>
		</div>
	</foreignObject>
</svg>
`;

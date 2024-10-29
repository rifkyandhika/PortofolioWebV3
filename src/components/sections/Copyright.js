const Copyright = () => {
  return (
    <section className="copyright">
      <img
        alt=""
        className="z-1 hide-mobile"
        src="assets/separator-copyright.png"
      />
      <div>
        <span>© {new Date().getFullYear()} Rifky Andhika Maulana</span>
        {/* <span>
          Designed By{" "}
          <a
            target="_blank"
            href="https://themeforest.net/user/Codeefly/portfolio"
          >
            Codeefly
          </a>
        </span> */}
        <ul>
          <li>
            <a href="https://github.com/rifkyandhika" target="_blank">
              <i className="fa-brands fa-github" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/rfky.andhika/" target="_blank">
              <i className="fa-brands fa-instagram" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/rifkyandhikam/" target="_blank">
              <i className="fa-brands fa-linkedin" />
            </a>
          </li>
          {/* <li>
            <a href="#">
              <i className="fa-brands fa-facebook" />
            </a>
          </li> */}
        </ul>
      </div>
    </section>
  );
};
export default Copyright;

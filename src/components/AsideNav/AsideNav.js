import React from "react";
import "./AsideNav.scss";
import { NavLink } from "react-router-dom";
import * as actions from "../../_redux/actions/";
import { connect } from "react-redux";

function AsideNav(props) {
  return (
    <aside className="AsideNav">
      <section className="logo-section">
        <div className="logo-background">
          <i class="fas fa-3x fa-music company-logo" />
        </div>
      </section>
      <nav>
        <NavLink className="aside-link" activeClassName="active" to="/home">
          Home
        </NavLink>
        <NavLink
          className="aside-link"
          activeClassName="active"
          to="/browse"
          onClick={() => props.clearSong()}
        >
          Browse
        </NavLink>
        <NavLink className="aside-link" activeClassName="active" to="/artist">
          Artists
        </NavLink>
      </nav>
      <div className="placeholder" />
    </aside>
  );
}

const mapDispatchToProps = dispatch => ({
  resetIndex: () => dispatch(actions.resetIndex()),
  clearSong: () => dispatch(actions.clearSong())
});

export default connect(
  null,
  mapDispatchToProps
)(AsideNav);

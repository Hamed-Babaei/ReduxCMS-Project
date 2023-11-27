import React from "react";
import { useDispatch } from "react-redux";
import { removeUser } from "../../redux/store/users";
import swal from "sweetalert";

export default function UserItem({ _id, firstname, lastname, email }) {
  const dispath = useDispatch();
  const removeHandler = () => {
    console.log("clicked");
    swal({
      title: "آیا از حذف مطمعن هستید؟",
      icon: "warning",
      buttons: ["نه", "آره"],
    }).then((result) => {
      if (result) {
        dispath(removeUser(_id));
        swal({
          title: "کاربر با موفقیت حذف شد ",
          icon: "success",
          buttons: "خیلی هم عالی",
        }).then(() => {});
      }
    });
  };
  return (
    <div className="uesrs__item">
      <div className="users__info">
        <img
          src="../../img/admin/profile/banana.png"
          alt="photo user"
          className="users__img"
        />
        <div className="users__details">
          <p className="users__name my-0">
            {firstname} {lastname}
          </p>
          <p lang="en" className="users__email">
            {/* ce01010101it@gmail.com */}
            {email}
          </p>
        </div>
      </div>
      <div className="users__btns">
        <button className="btn-custome btn-custome--gray">پیام ها</button>
        <button className="btn-custome btn-custome__blue">اطلاعات</button>
        <button
          className="btn-custome btn-custome__red"
          onClick={removeHandler}
        >
          حذف
        </button>
      </div>
    </div>
  );
}

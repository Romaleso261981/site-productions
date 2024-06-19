import s from './OrderModal.module.css';

export const OrderModal = () => {
  return (
    <section className={s.wrapper}>
      <div className={s.sectionTop}>
        <span className={s.sectionTop_title}>
          ОБГОВОРИМО ВАШ
          <br />
          ПРОЄКТ
        </span>
        <span className={s.sectionTop_text}>
          Заповніть форму і зв&apos;яжеться з вами наш фахівець
        </span>
      </div>
      <div className={s.modalBox}>
        <form className={s.modalFormInputs}>
          <input type="text" placeholder="Ваше ім'я*" />
          <input type="email" placeholder="Ваш e-mail*" />
          <input type="text" placeholder="Вебсайт компанії" />
        </form>
        <div className={s.modalFormChoice}>
          <input type="checkbox" name="service" value="seo" placeholder="SEO просування" />
          {/* <label className={s.checkboxContainer}>
            <input type="checkbox" name="service" value="ppc" />
            <span className={s.formCheckbox}>PPC реклама</span>
          </label>
          <label className={s.checkboxContainer}>
            <input type="checkbox" name="service" value="smm" />
            <span className={s.formCheckbox}>SMM</span>
          </label> */}
        </div>
      </div>
    </section>
  );
};

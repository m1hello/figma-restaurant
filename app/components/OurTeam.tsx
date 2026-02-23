import Image from "next/image";

export default function OurTeam() {
  return (
    <section id="our-team" className="ourTeamSection" aria-label="Our team">
      <div className="ourTeamInner">
        <Image
          className="ourTeamSlogan"
          src="/Our%20team/Slogan.svg"
          alt="Our team"
          width={305}
          height={64}
          priority={false}
        />
        <p className="ourTeamIntroText">
          In velit auctor non auctor in. Id pellentesque facilisis at lectus sed in sit
          tellus mauris.
        </p>
        <div className="ourTeamCards">
          <div className="ourTeamAutoLayout">
            <div className="ourTeamPhoto" aria-hidden="true" />
            <p className="ourTeamMemberName">Johnathan Demario</p>
            <p className="ourTeamMemberRole">Founder</p>
            <p className="ourTeamMemberBio">
              In velit auctor non auctor in. Id pellentesque facilisis at lectus sed in sit
              tellus mauris.
            </p>
          </div>
          <div className="ourTeamAutoLayoutSecond">
            <div className="ourTeamPhotoSecond" aria-hidden="true" />
            <p className="ourTeamMemberNameSecond">Bryan Machado</p>
            <p className="ourTeamMemberRoleSecond">Chef</p>
            <p className="ourTeamMemberBioSecond">
              Duis sed ut dolor viverra porttitor semper et faucibus facilisis. Hac
              maecenas rhoncus.
            </p>
          </div>
          <div className="ourTeamAutoLayoutThird">
            <div className="ourTeamPhotoThird" aria-hidden="true" />
            <p className="ourTeamMemberNameThird">Adam Joseph</p>
            <p className="ourTeamMemberRoleThird">Chef</p>
            <p className="ourTeamMemberBioThird">
              Faucibus sed vitae dui justo duis in. Egestas ipsum ut a elementum at
              laoreet at quam vitae.
            </p>
          </div>
          <div className="ourTeamAutoLayoutFourth">
            <div className="ourTeamPhotoFourth" aria-hidden="true" />
            <p className="ourTeamMemberNameFourth">Putin Desque</p>
            <p className="ourTeamMemberRoleFourth">Chef</p>
            <p className="ourTeamMemberBioFourth">
              Molestie viverra mattis nisl vitae orci feugiat in. Aliquet quis orci
              turpis aliquet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

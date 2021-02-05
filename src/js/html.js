export const taskHTML = `
            <div class="list__item" data-id="%%ID%%" data-tag="%%TAG%%">
              <div class="cover">&nbsp;</div>
              <div class="done__icon-div">
                <svg class="icon %%SHOW%%">
                  <use xlink:href="./img/sprite.svg#icon-checkmark"></use>
                </svg>
              </div>
              <div class="list__item--description">
                <span class="top">%%TITLE%%</span>
                <div class="bottom">
                  <svg class="icon time-icon">
                    <use xlink:href="./img/sprite.svg#icon-access_time"></use>
                  </svg>
                  <span class="due-date">%%DUEDATE%%</span>
                  <!--
                  <svg class="icon notif-icon">
                    <use
                      xlink:href="./img/sprite.svg#icon-notifications-outline"
                    ></use>
                  </svg>
                  -->
                </div>
              </div>
              <svg id="%%STARICON%%" class="icon star-icon">
                <use xlink:href="./img/sprite.svg#icon-star-o"></use>
              </svg>
            </div>`;

export const detailHTML = `  
          <div class="detail__icon">
            <svg class="icon done-icon">
              <use xlink:href="./img/sprite.svg#icon-checkmark"></use>
            </svg>
          </div>
          <div class="detail__content">
            <div class="detail__header">
              <div class="top">
                <span>%%DETAILTITLE%%</span>
                <div class="icon-div">
                  <svg class="icon">
                    <use xlink:href="./img/sprite.svg#icon-star-o"></use>
                  </svg>
                  <svg class="icon">
                    <use
                      xlink:href="./img/sprite.svg#icon-dots-horizontal-triple"
                    ></use>
                  </svg>
                </div>
              </div>
              <div class="bottom">
                <div class="date">
                  <svg class="icon">
                    <use xlink:href="./img/sprite.svg#icon-access_time"></use>
                  </svg>
                  <span>%%DETAILDUEDATE%%</span>
                </div>
                <div class="reminder">
                  <svg class="icon">
                    <use xlink:href="./img/sprite.svg#icon-alarmclock"></use>
                  </svg>
                  <span>Remind me at 9:15am</span>
                </div>
              </div>
            </div>
            <p class="detail__text">
              %%DETAILDESCRIPTION%%
            </p>
            
            <!--
            <div class="detail__step">
              <a class="detail__step--add"> &#43; Add step </a>
              <div class="detail__step--item">
                <input type="checkbox" name="" id="step item" />
                <label for="step item">play soccer</label>
              </div>

              <div class="detail__step--item">
                <input type="checkbox" name="" id="step item" />
                <label for="step item">music lesson</label>
              </div>
              <div class="detail__step--item">
                <input type="checkbox" name="" id="step item" />
                <label for="step item">visit the dentist</label>
              </div>
            </div>
            -->
          </div>`;

export const tagHTML = `
          <div class="sidebar__tag--item sidebar__tag--work">
            <div class="%%ID%% cover">&nbsp;</div>
            <span class="tag-color %%TAGCOLOUR%%">&nbsp;</span>
            <span class="tag-text">%%TAGTITLE%%</span>
            <span class="tag-count">%%TAGNUMBER%%</span>
          </div>
          `;

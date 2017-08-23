export default {
  defaultForm: `<form class="sv-form">
  <fieldset>
      <legend>Exemplo de titulo</legend>
      <div class="sv-row">
          <div class="sv-column">
              <label><span>Name</span>
                  <input type="text" name="name">
              </label>
          </div>
      </div>
      <div class="sv-row">
          <div class="sv-column">
              <label><span>E-mail</span>
                  <input type="text" name="email">
              </label>
          </div>
      </div>
      <div class="sv-row">
          <div class="sv-column">
              <label><span>Disabled Field</span>
                  <input type="text" disabled="" name="login" value="Disabled field">
              </label>
          </div>
      </div>
      <div class="sv-row">
          <div class="sv-column">
              <label><span>Gender</span>
                  <div class="sv-select">
                      <select>
                          <option value="">Please, select</option>
                          <option value="M">Male</option>
                          <option value="F">Female</option>
                      </select>
                      <label><i class="fa fa-angle-down fa-fw"></i></label>
                  </div>
              </label>
          </div>
      </div>
  </fieldset>
  <div class="sv-form-action">
      <button class="sv-button out-info">cancelar</button>
      <button class="sv-button info sv-ml--15">salvar</button>
  </div>
</form>`,
  compactForm: `<form class="sv-form sv-compact">
  <fieldset class="bordered sv-bg-color--steel-50">
      <legend>Exemplo de titulo</legend>
      <div class="sv-row">
          <div class="sv-column">
              <label><span>Name</span>
                  <input type="text" name="name">
              </label>
          </div>
      </div>
      <div class="sv-row">
          <div class="sv-column">
              <label><span>E-mail</span>
                  <input type="text" name="email">
              </label>
          </div>
      </div>
      <div class="sv-row">
          <div class="sv-column">
              <label><span>Disabled Field</span>
                  <input type="text" disabled="" name="login" value="Disabled field">
              </label>
          </div>
      </div>
      <div class="sv-row">
          <div class="sv-column">
              <label><span>Gender</span>
                  <div class="sv-select">
                      <select>
                          <option value="">Please, select</option>
                          <option value="M">Male</option>
                          <option value="F">Female</option>
                      </select>
                      <label><i class="fa fa-angle-down fa-fw"></i></label>
                  </div>
              </label>
          </div>
      </div>
  </fieldset>
  <div class="sv-form-action">
      <button class="sv-button out-info">cancelar</button>
      <button class="sv-button info sv-ml--15">salvar</button>
  </div>
</form>`,
  formGrid: `<form class="sv-form sv-compact">
  <fieldset class="bordered sv-bg-color--steel-50">
      <legend>Exemplo de titulo</legend>
      <div class="sv-row--with-gutter">
          <div class="sv-column">
              <label><span>First Name</span>
                  <input type="text" name="firstName">
              </label>
          </div>
          <div class="sv-column">
              <label><span>Last Name</span>
                  <input type="text" name="lastName">
              </label>
          </div>
          <div class="sv-column">
              <label><span>E-mail</span>
                  <input type="text" name="email">
              </label>
          </div>
          <div class="sv-column">
              <label><span>Confirm E-mail</span>
                  <input type="text" name="confirmEmail">
              </label>
          </div>
      </div>
      <div class="sv-row--with-gutter">
          <div class="sv-column">
              <label><span>Disabled Field</span>
                  <input type="text" disabled="" name="login" value="Disabled field">
              </label>
          </div>
          <div class="sv-column">
              <label><span>Gender</span>
                  <div class="sv-select">
                      <select>
                          <option value="">Please, select</option>
                          <option value="M">Male</option>
                          <option value="F">Female</option>
                      </select>
                      <label><i class="fa fa-angle-down fa-fw"></i></label>
                  </div>
              </label>
          </div>
      </div>
  </fieldset>
  <div class="sv-form-action">
      <button class="sv-button out-info">cancelar</button>
      <button class="sv-button info sv-ml--15">salvar</button>
  </div>
</form>`,
  formInline: ``,
};

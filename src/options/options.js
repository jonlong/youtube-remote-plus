/**
 * Update the UI: set the value of the shortcut textbox.
 */
async function updateUI() {
  let commands = await browser.commands.getAll()
  for (command of commands) {
    const input = document.querySelector(`#${command.name}`)

    if (input) {
      input.value = command.shortcut
    }
  }
}

/**
 * Update the shortcut based on the value in the textbox.
 */
async function updateShortcut() {
  document.querySelectorAll(`[data-shortcut]`).forEach(
    async input =>
      await browser.commands
        .update({
          name: input.id,
          shortcut: input.value
        })
        .then(response => console.log('success', response))
        .catch(err => console.log('err', err))
  )
}

/**
 * Reset the shortcut and update the textbox.
 */
async function resetShortcut() {
  let commands = await browser.commands.getAll()
  for (command of commands) {
    await browser.commands.reset(command.name)
  }
  updateUI()
}

/**
 * Update the UI when the page loads.
 */
document.addEventListener('DOMContentLoaded', updateUI)

/**
 * Handle update and reset button clicks
 */
document.querySelector('#update').addEventListener('click', updateShortcut)
document.querySelector('#reset').addEventListener('click', resetShortcut)

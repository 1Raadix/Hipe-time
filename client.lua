RegisterCommand("hipe-showtime", function()
    SetNuiFocus(false, false)
    SendNUIMessage({ action = "hipe-show" })
end)


RegisterNUICallback("hipe-show", function(data, cb)
    print("Hipe Time UI activated")
    cb("ok")
end)

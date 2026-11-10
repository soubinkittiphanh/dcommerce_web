const fs = require('fs');
const path = require('path');
const ResEdit = require('resedit');

const exePath = path.resolve(__dirname, '../dist_electron/win-unpacked/DCommerce POS.exe');
const icoPath = path.resolve(__dirname, '../assets/icons/appicon/icon.ico');

if (!fs.existsSync(exePath)) {
  console.log('Skipping: win-unpacked exe not found at', exePath);
  process.exit(0);
}

if (!fs.existsSync(icoPath)) {
  console.error('Error: Icon not found at', icoPath);
  process.exit(1);
}

try {
  console.log('Patching Windows executable icon with:', icoPath);
  const exeData = fs.readFileSync(exePath);
  const icoData = fs.readFileSync(icoPath);

  const exe = ResEdit.NtExecutable.from(exeData);
  const res = ResEdit.NtExecutableResource.from(exe);
  const iconFile = ResEdit.Data.IconFile.from(icoData);

  ResEdit.Resource.IconGroupEntry.replaceIconsForResource(
    res.entries,
    1,
    1033,
    iconFile.icons.map(item => item.data)
  );

  res.outputResource(exe);
  const newBinary = exe.generate();
  fs.writeFileSync(exePath, Buffer.from(newBinary));
  console.log(' Successfully patched icon in:', exePath);
} catch (err) {
  console.error('Failed to patch exe icon:', err);
  process.exit(1);
}


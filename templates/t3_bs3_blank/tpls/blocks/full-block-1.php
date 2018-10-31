<?php
/**
 * @package   T3 Blank
 * @copyright Copyright (C) 2005 - 2012 Open Source Matters, Inc. All rights reserved.
 * @license   GNU General Public License version 2 or later; see LICENSE.txt
 */

defined('_JEXEC') or die;
?>

<?php if ($this->checkSpotlight('full-block-1', 'full-1, full-2, full-3, full-4, full-5, full-6')) : ?>
	<!-- FullBlock 1 -->
	<div class="container-fiuled"><?php $this->spotlight('full-block-1', 'full-1, full-2, full-3, full-4, full-5, full-6') ?></div>
	<!-- //FullBlock 1 -->
<?php endif ?>